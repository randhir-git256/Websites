
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('appointment-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 

        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const date = document.getElementById('date').value;
        const service = document.getElementById('service').value;


        console.log('Appointment Details:');
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Phone: ${phone}`);
        console.log(`Date: ${date}`);
        console.log(`Service: ${service}`);
    

    
        alert('Your appointment has been booked successfully!');

    
        form.reset();
    });
});
