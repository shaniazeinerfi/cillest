// Define the function that processes visible items
function processVisibleItem(item) {
    // Perform any actions needed when the item becomes visible
    console.log('Processing visible item:', item.id);
    // Example: Load additional data, animate item, etc.
}

// Set up the Intersection Observer
const observerOptions = {
    root: null, // Use the viewport as the root
    rootMargin: '0px',
    threshold: 0.1 // Trigger when at least 10% of the item is visible
};

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // The item is now visible
            processVisibleItem(entry.target);
            // Optionally unobserve the item if further observation is not needed
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

// Observe each item
document.querySelectorAll('.item').forEach(item => {
    observer.observe(item);
});
