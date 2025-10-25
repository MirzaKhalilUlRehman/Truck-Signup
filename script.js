 document.getElementById('click-button').addEventListener('click', function() {
            const truck = document.getElementById('truck');
            const clickButton = document.getElementById('click-button');
            const signupForm = document.getElementById('signup-form');
            const road = document.getElementById('road');
            
            // Remove any existing inline styles
            truck.removeAttribute('style');
            
            // Force a reflow
            void truck.offsetWidth;
            
            // Move truck to the right side
            requestAnimationFrame(() => {
                truck.style.left = 'calc(100% - 300px)';
                
                setTimeout(() => {
                    // Hide elements
                    clickButton.style.opacity = '0';
                    road.style.opacity = '0';
                    truck.style.opacity = '0';
                    
                    setTimeout(() => {
                        clickButton.style.display = 'none';
                        road.style.display = 'none';
                        truck.style.display = 'none';
                        
                        // Show signup form
                        signupForm.style.display = 'block';
                        requestAnimationFrame(() => {
                            signupForm.style.opacity = '1';
                            signupForm.style.transform = 'scale(1)';
                        });
                    }, 500);
                }, 1600);
            });
        });

        document.getElementById('form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            const submitBtn = document.getElementById('submit-btn');
            const signupForm = document.getElementById('signup-form');
            const truck = document.getElementById('truck');
            const formData = document.getElementById('form-data');
            const road = document.getElementById('road');
            
            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }
            
            // Show loading state
            submitBtn.classList.add('form-submitting');
            submitBtn.disabled = true;
            
            setTimeout(() => {
                // Hide signup form
                signupForm.style.opacity = '0';
                signupForm.style.transform = 'scale(0.95)';
                
                setTimeout(() => {
                    signupForm.style.display = 'none';
                    
                    // Show road and truck
                    road.style.display = 'block';
                    truck.style.display = 'block';
                    
                    // Fade in road and truck
                    setTimeout(() => {
                        road.style.opacity = '1';
                        truck.style.opacity = '1';
                        truck.style.left = '-260px';  // Start from left side
                        
                        // Update form data in truck
                        formData.innerHTML = `Welcome, ${name}!`;
                        formData.classList.add('visible');
                        
                        // Move truck to center then to right
                        setTimeout(() => {
                            truck.style.left = 'calc(50% - 130px)';  // Move to center
                            
                            setTimeout(() => {
                                truck.style.left = 'calc(100% + 300px)';  // Move out right
                                
                                // Fade out road
                                setTimeout(() => {
                                    road.style.opacity = '0';
                                    // Reset page after animations
                                    setTimeout(() => {
                                        location.reload();
                                    }, 500);
                                }, 1000);
                            }, 1600);
                        }, 800);
                    }, 100);
                }, 500);
            }, 1000);
        });
