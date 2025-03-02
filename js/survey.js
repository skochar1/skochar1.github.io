document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('randomQuizButton');
    
    button.addEventListener('click', function() {
        // Disable the button immediately after it's clicked
        button.disabled = true;
        
        // Fetch the URL from your Apps Script app
        fetch('https://script.google.com/macros/s/AKfycbxuAF0780I4ja3nFKZvADCY9FFiL_kVYC02oZ_Asudw0NJqVmi6C8LXIkxN8LMtgMzy/exec')
            .then(response => response.text())
            .then(url => {
                // Redirect the user to the fetched URL
                window.location.href = url;
            })
            .catch(error => {
                console.error('Error fetching form URL:', error);
            })
            .finally(() => {
                // Re-enable the button after 30 seconds, regardless of whether the fetch was successful or not
                setTimeout(() => {
                    button.disabled = false;
                }, 30000); // 30000 milliseconds = 30 seconds
            });
    });
});
