**Question 2**

**2. Create a form with basic validation (name, email, phone number, password, age, gender, date, color picker)**

```
<!DOCTYPE html>
<html>
<head>
  <title>Form Validation</title>
</head>
<body>
  <h1>Form Validation Example</h1>
  <form onsubmit="return validateForm()">
    <label>Name:</label>
    <input type="text" id="name">

    <label>Email:</label>
    <input type="email" id="email">

    <label>Phone:</label>
    <input type="tel" id="phone">

    <label>Password:</label>
    <input type="password" id="password">

    <label>Age:</label>
    <input type="number" id="age">

    <label>Gender:</label>
    <select id="gender">
      <option value="">Select</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </select>

    <label>Date:</label>
    <input type="date" id="date">

    <label>Color:</label>
    <input type="color" id="color">

    <input type="submit" value="Submit">
  </form>

<script>
    function validateForm() {
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var phone = document.getElementById("phone").value;
      var password = document.getElementById("password").value;
      var age = document.getElementById("age").value;
      var gender = document.getElementById("gender").value;
      var date = document.getElementById("date").value;
      var color = document.getElementById("color").value;

      if (name === "") {
        alert("Please enter your name.");
        return false;
      }
      if (email === "") {
        alert("Please enter your email address.");
        return false;
      }
      if (phone === "") {
        alert("Please enter your phone number.");
        return false;
      }
      if (password === "") {
        alert("Please enter a password.");
        return false;
      }
      if (age === "") {
        alert("Please enter your age.");
        return false;
      }
      if (gender === "") {
        alert("Please select your gender.");
        return false;
      }
      if (date === "") {
        alert("Please select a date.");
        return false;
      }
      if (color === "") {
        alert("Please select a color.");
        return false;
      }
      alert("Form submitted successfully!");
      return true;
    }
  </script>

</body>
</html>

```
