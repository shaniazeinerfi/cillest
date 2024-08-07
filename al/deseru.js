// Assuming 'source' is an object with 'name' property

function assignNameIfNone(source, newName) {
    if (!source.name) { // Check if 'name' property is falsy (undefined, null, empty string)
        source.name = newName; // Assign newName to 'name' property
    }
}

// Example usage:
let source1 = { name: 'Source 1' };
let source2 = { /* no name property */ };

assignNameIfNone(source1, 'Source 1'); // Name already exists, no change
assignNameIfNone(source2, 'Source 2'); // No name, 'name' property assigned 'Source 2'

console.log(source1); // Output: { name: 'Source 1' }
console.log(source2); // Output: { name: 'Source 2' }
