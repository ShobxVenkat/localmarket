// ================= TRENDING CARD HOVER EFFECT =================
document.querySelectorAll(".trending-item").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-2px)";
    card.style.boxShadow = "0 8px 16px rgba(0,0,0,0.1)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
    card.style.boxShadow = "0 4px 8px rgba(0,0,0,0.05)";
  });
});


// ================= FAVORITE BUTTON TOGGLE =================
document.querySelectorAll(".btn-outline-primary").forEach(btn => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    const icon = this.querySelector("i");

    if (this.classList.contains("btn-outline-primary")) {
      this.classList.remove("btn-outline-primary");
      this.classList.add("btn-primary");
      icon.classList.remove("bi-heart");
      icon.classList.add("bi-heart-fill");
    } else {
      this.classList.remove("btn-primary");
      this.classList.add("btn-outline-primary");
      icon.classList.remove("bi-heart-fill");
      icon.classList.add("bi-heart");
    }
  });
});


// ================= HERO CAROUSEL AUTO INTERVAL (OPTIONAL) =================
const heroCarousel = document.querySelector("#heroCarousel");
if (heroCarousel) {
  const carousel = new bootstrap.Carousel(heroCarousel, {
    interval: 4000,
    ride: "carousel",
    pause: "hover",
    touch: true
  });
}




  document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.15)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
    });
  });
  
  // Search functionality

  const categoryCards = document.querySelectorAll('.col-sm-6.col-md-4.col-lg-3');
  
  if(searchInput) {
    searchInput.addEventListener('input', function(e) {
      const searchTerm = e.target.value.toLowerCase();
      
      categoryCards.forEach(card => {
        const title = card.querySelector('h6').textContent.toLowerCase();
        const desc = card.querySelector('small').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || desc.includes(searchTerm)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }





    document.querySelectorAll('.btn-outline-secondary').forEach(btn => {
    btn.addEventListener('click', function() {
      // Remove active class from all filter buttons
      document.querySelectorAll('.btn-outline-primary, .btn-outline-secondary').forEach(b => {
        b.classList.remove('active');
        b.classList.remove('btn-outline-primary');
        b.classList.add('btn-outline-secondary');
      });
      
      // Add active class to clicked button
      this.classList.remove('btn-outline-secondary');
      this.classList.add('btn-outline-primary', 'active');
    });
  });
  
  // Remove favorite item
  document.querySelectorAll('.dropdown-item.text-danger').forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const card = this.closest('.card');
      if (card) {
        card.style.opacity = '0.5';
        setTimeout(() => {
          card.style.display = 'none';
          // Show empty state if no items left
          const remainingCards = document.querySelectorAll('.card:not([style*="display: none"])');
          if (remainingCards.length === 0) {
            // You could uncomment the empty state section here
            alert('All favorites removed! The empty state would show here.');
          }
        }, 300);
      }
    });
  });
  
  // Hover effect on cards
  document.querySelectorAll('.favorite-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.05)';
    });
  });




    document.querySelectorAll('.nav-link').forEach(tab => {
    tab.addEventListener('click', function(e) {
      e.preventDefault();
      // Remove active class from all tabs
      document.querySelectorAll('.nav-link').forEach(t => {
        t.classList.remove('active');
      });
      // Add active class to clicked tab
      this.classList.add('active');
    });
  });
  
  // Search functionality
  const searchInput = document.querySelector('input[type="search"]');
  const savedItems = document.querySelectorAll('.saved-item');
  
  if(searchInput) {
    searchInput.addEventListener('input', function(e) {
      const searchTerm = e.target.value.toLowerCase();
      
      savedItems.forEach(item => {
        const title = item.querySelector('h6').textContent.toLowerCase();
        const desc = item.querySelector('p').textContent.toLowerCase();
        const category = item.querySelector('.badge').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || desc.includes(searchTerm) || category.includes(searchTerm)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  }
  
  // Delete item functionality
  document.querySelectorAll('.dropdown-item.text-danger').forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const card = this.closest('.card');
      if (card) {
        card.style.opacity = '0.5';
        setTimeout(() => {
          card.style.display = 'none';
        }, 300);
      }
    });
  });
  
  // Hover effect on cards
  document.querySelectorAll('.saved-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.05)';
    });
  });
  
  // Sync button animation
  document.querySelector('.btn-primary').addEventListener('click', function() {
    const originalText = this.innerHTML;
    this.innerHTML = '<i class="bi bi-check-circle me-2"></i> Syncing...';
    this.disabled = true;
    
    setTimeout(() => {
      this.innerHTML = '<i class="bi bi-check-circle me-2"></i> Synced!';
      this.classList.remove('btn-primary');
      this.classList.add('btn-success');
      
      setTimeout(() => {
        this.innerHTML = originalText;
        this.classList.remove('btn-success');
        this.classList.add('btn-primary');
        this.disabled = false;
      }, 2000);
    }, 1500);
  });



  const togglePassword = document.getElementById('togglePassword');
  const password = document.getElementById('password');
  
  if (togglePassword && password) {
    togglePassword.addEventListener('click', function() {
      const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
      password.setAttribute('type', type);
      this.innerHTML = type === 'password' ? '<i class="bi bi-eye"></i>' : '<i class="bi bi-eye-slash"></i>';
    });
  }
  
  // Form submission
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const email = this.querySelector('input[type="email"]').value;
      const password = this.querySelector('input[type="password"]').value;
      const rememberMe = this.querySelector('#rememberMe').checked;
      
      // Simple validation
      if (!email || !password) {
        alert('Please fill in all required fields');
        return;
      }
      
      // Show loading state
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="bi bi-arrow-clockwise me-2"></i>Logging in...';
      submitBtn.disabled = true;
      
      // Simulate API call
      setTimeout(() => {
        // Success - redirect to home
        alert('Login successful! Welcome back.');
        window.location.href = 'index.html';
        
        // Reset button (in case redirect fails)
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }, 1500);
    });
  }
  
  // Social login button animations
  document.querySelectorAll('.social-btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
      this.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
    });
    
    btn.addEventListener('mouseleave', function() {
      this.style.boxShadow = 'none';
    });
    
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const platform = this.textContent.trim();
      alert(`This would redirect to ${platform} authentication. Demo only.`);
    });
  });
  
  // Forgot password link
  document.querySelector('a[href="#"]').addEventListener('click', function(e) {
    e.preventDefault();
    const email = prompt('Please enter your email to reset password:');
    if (email) {
      alert(`Password reset link sent to ${email}. Check your inbox.`);
    }
  });




  
  const confirmPassword = document.getElementById('confirmPassword');
  
  function toggleVisibility(element, toggle) {
    if (toggle && element) {
      toggle.addEventListener('click', function() {
        const type = element.getAttribute('type') === 'password' ? 'text' : 'password';
        element.setAttribute('type', type);
        this.innerHTML = type === 'password' ? '<i class="bi bi-eye"></i>' : '<i class="bi bi-eye-slash"></i>';
      });
    }
  }
  
  toggleVisibility(password, togglePassword);
  toggleVisibility(confirmPassword, toggleConfirmPassword);
  
  // Password strength checker
  function checkPasswordStrength(pw) {
    let strength = 0;
    
    // Length check
    if (pw.length >= 8) strength += 1;
    if (pw.length >= 12) strength += 1;
    
    // Complexity checks
    if (/[A-Z]/.test(pw)) strength += 1;
    if (/[0-9]/.test(pw)) strength += 1;
    if (/[^A-Za-z0-9]/.test(pw)) strength += 1;
    
    return Math.min(strength, 5); // Max 5
  }
  
  // Update password strength visual
  function updatePasswordStrength() {
    const pw = password.value;
    const strength = checkPasswordStrength(pw);
    const strengthBar = document.getElementById('passwordStrength');
    const strengthText = document.getElementById('strengthText');
    
    let width = '0%';
    let color = '#dc3545'; // Red
    let text = 'Very Weak';
    
    if (strength === 0) {
      width = '20%';
      text = 'Very Weak';
    } else if (strength === 1) {
      width = '40%';
      color = '#fd7e14'; // Orange
      text = 'Weak';
    } else if (strength === 2) {
      width = '60%';
      color = '#ffc107'; // Yellow
      text = 'Fair';
    } else if (strength === 3) {
      width = '80%';
      color = '#20c997'; // Teal
      text = 'Good';
    } else if (strength >= 4) {
      width = '100%';
      color = '#198754'; // Green
      text = 'Strong';
    }
    
    strengthBar.style.width = width;
    strengthBar.style.backgroundColor = color;
    strengthText.textContent = text;
    strengthText.style.color = color;
  }
  
  // Check password match
  function checkPasswordMatch() {
    const matchText = document.getElementById('passwordMatch');
    if (!password.value || !confirmPassword.value) {
      matchText.textContent = '';
      matchText.className = 'form-text';
      return;
    }
    
    if (password.value === confirmPassword.value) {
      matchText.innerHTML = '<i class="bi bi-check-circle-fill text-success me-1"></i> Passwords match';
      matchText.className = 'form-text text-success';
    } else {
      matchText.innerHTML = '<i class="bi bi-x-circle-fill text-danger me-1"></i> Passwords do not match';
      matchText.className = 'form-text text-danger';
    }
  }
  
  // Event listeners
  password.addEventListener('input', function() {
    updatePasswordStrength();
    checkPasswordMatch();
  });
  
  confirmPassword.addEventListener('input', checkPasswordMatch);
  
  // Form submission
  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Validate passwords match
      if (password.value !== confirmPassword.value) {
        alert('Passwords do not match!');
        return;
      }
      
      // Validate terms acceptance
      const terms = document.getElementById('terms');
      if (!terms.checked) {
        alert('Please accept the Terms of Service and Privacy Policy');
        return;
      }
      
      // Show loading state
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="bi bi-arrow-clockwise me-2"></i>Creating Account...';
      submitBtn.disabled = true;
      
      // Simulate API call
      setTimeout(() => {
        alert('Account created successfully! Please check your email for verification.');
        window.location.href = 'index.html';
        
        // Reset button (in case redirect fails)
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }, 2000);
    });
  }
  
  // Social registration buttons
  document.querySelectorAll('.btn-outline-secondary').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const platform = this.textContent.trim();
      alert(`This would redirect to ${platform} registration. Demo only.`);
    });
  });
  
  // Initialize password strength on load
  updatePasswordStrength();