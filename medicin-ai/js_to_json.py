import re
import json
import os

def clean_js_to_json(js_content, var_name):
    # Remove single-line comments
    content = re.sub(r'//.*$', '', js_content, flags=re.MULTILINE)
    
    # Locate the assignment, e.g., window.SYMPTOMS = { ... }
    match = re.search(rf'window\.{var_name}\s*=\s*([\[{{])', content)
    if not match:
        raise ValueError(f"Could not find window.{var_name} assignment")
    
    start_char = match.group(1)
    start_idx = match.start(1)
    
    raw_js = content[start_idx:].strip()
    if raw_js.endswith(';'):
        raw_js = raw_js[:-1].strip()
        
    # 1. Quote unquoted keys (e.g., id: -> "id":)
    # We match any word identifier followed by a colon, but ONLY if it is preceded by an opening brace { or a comma ,
    # This prevents matching colons inside strings (like http:// or time formats).
    # Look-behind (?<=[{,]) matches exactly 1 character (fixed-width).
    raw_js = re.sub(r'(?<=[{,])\s*([a-zA-Z0-9_]+)\s*:', r' "\1":', raw_js)
    
    # 2. Clean up trailing commas before closing braces/brackets
    raw_js = re.sub(r',(\s*[}\]])', r'\1', raw_js)
    
    return raw_js

def convert_file(js_path, json_path, var_name):
    print(f"Converting {js_path} -> {json_path}...")
    with open(js_path, 'r', encoding='utf-8') as f:
        js_content = f.read()
    
    json_str = clean_js_to_json(js_content, var_name)
    
    # Verify it is valid JSON
    try:
        data = json.loads(json_str)
        print("Success! JSON is valid.")
        with open(json_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
    except Exception as e:
        print(f"Error parsing JSON: {e}")
        # Save a debug file of the failed JSON string
        debug_path = json_path + ".debug"
        with open(debug_path, 'w', encoding='utf-8') as f:
            f.write(json_str)
        print(f"Saved debug file to {debug_path}")
        raise e

if __name__ == "__main__":
    base_dir = "C:\\Users\\sayed\\.gemini\\antigravity\\scratch\\medic-ai\\js"
    convert_file(os.path.join(base_dir, "symptoms.js"), os.path.join(base_dir, "symptoms.json"), "SYMPTOMS")
    convert_file(os.path.join(base_dir, "diseases.js"), os.path.join(base_dir, "diseases.json"), "DISEASES")
