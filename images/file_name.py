import os

# Path to the folder containing files
print("Folder path: ", end="");
folder_path = input()

print("Prefix: ", end="");
prefix = input()

# Get a list of all files in the folder
files = os.listdir(folder_path)

# Filter out only files (if needed, excluding directories)
files = [f for f in files if os.path.isfile(os.path.join(folder_path, f))]

# Rename files sequentially
for index, filename in enumerate(files):
        new_name = f"{prefix}{index + 1}{os.path.splitext(filename)[1]}"  # Preserve the file extension
        os.rename(
            os.path.join(folder_path, filename),
            os.path.join(folder_path, new_name)
        )

print(f"Renamed {len(files)} files.")

