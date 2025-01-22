
// script.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('appointment-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const date = document.getElementById('date').value;
        const service = document.getElementById('service').value;

        // Log the form data to the console (for now)
        console.log('Appointment Details:');
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Phone: ${phone}`);
        console.log(`Date: ${date}`);
        console.log(`Service: ${service}`);

        // Show a success message (can be improved with a modal or redirect later)
        alert('Your appointment has been booked successfully!');

        // Reset the form
        form.reset();
    });
});
