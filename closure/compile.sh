#!/bin/bash

echo "Compiling...";

# --compilation_level WHITESPACE_ONLY | SIMPLE_OPTIMIZATIONS | ADVANCED_OPTIMIZATIONS
# --formatting PRETTY_PRINT | PRINT_INPUT_DELIMITER



java -jar compiler.jar \
    --compilation_level WHITESPACE_ONLY \
    --formatting PRETTY_PRINT \
\
    --js_output_file ../sprint/EdgeCommons-0.7.1.js \
\
    --js ../src/libs/Modulog-0.0.2.js \
    --js ../src/EdgeCommons.js \
    --js ../src/modules/Core/Core.js \
    --js ../src/modules/Preload/Preload.js \
    --js ../src/modules/Sound/Sound.js \

echo "Job done: Debug";

java -jar compiler.jar \
    --compilation_level SIMPLE_OPTIMIZATIONS \
    --formatting PRINT_INPUT_DELIMITER \
\
    --js_output_file ../sprint/EdgeCommons-0.7.1.min.js \
\
    --js ../src/libs/Modulog-0.0.2.js \
    --js ../src/EdgeCommons.js \
    --js ../src/modules/Core/Core.js \
    --js ../src/modules/Preload/Preload.js \
    --js ../src/modules/Sound/Sound.js \

echo "Job done: Minified";



#java -jar compiler.jar \
#    --compilation_level SIMPLE_OPTIMIZATIONS \
#    --formatting PRINT_INPUT_DELIMITER \
#\
#    --js_output_file ../sprint/EdgeCommons-Essentials-Sprint-0.7.1.js \
#\
#    --js ../src/libs/Modulog-0.0.2.js \
#    --js ../src/EdgeCommons.js \
#    --js ../src/modules/Core/Core.js \
#
#echo "Job done: Essentials";