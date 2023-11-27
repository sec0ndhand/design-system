# get a list of files in the src/components/ui
# loop through each of the file names, remove the .tsx extension
# make a new file for each file name in src/stories, Capitalize the first letter of the file name, add .stories.tsx extension
# take the contents of the file in src/assets/Template.stories.tsx and copy it into the new file
# replace the word Button with the file name

# get a list of files in the src/components/ui
files=$(ls src/components/ui)

for file in $files
do
    fileName=$(echo $file | cut -f 1 -d '.')
    capitalizedFileName=$(tr '[:lower:]' '[:upper:]' <<< ${fileName:0:1})${fileName:1}

    # make a new file for each file name in src/stories, Capitalize the first letter of the file name, add .stories.tsx extension
    newFilePath="src/stories/${capitalizedFileName}.stories.tsx"
    touch "$newFilePath"

    # copy the contents of the template file into the new file
    cat src/assets/Template.stories.tsx > "$newFilePath"

    # Use perl for replacing 'Button' with the capitalized file name and 'button' with the original file name
    perl -pi -e 's|Button|'"$capitalizedFileName"'|g' "$newFilePath"
    perl -pi -e 's|button|'"$fileName"'|g' "$newFilePath"
done
