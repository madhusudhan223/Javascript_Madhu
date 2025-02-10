
    const form = document.getElementById("studentForm");
    const resultDiv = document.getElementById("result");

    // Event Listeners for each field

    const handleFirstName = (e) => {
        console.log("First name", e.target.value)
    }

  const firstName = document.getElementById("firstName");
  firstName.addEventListener("input", handleFirstName)


    document.getElementById("lastName").addEventListener("input", (event) => {
        console.log("Last Name:", event.target.value);
    });

    document.querySelectorAll('input[name="religion"]').forEach(item=>{
        const handleChild = (e) => {
            console.log("selected religion", e.target.value)
        }
        item.addEventListener("change", handleChild);
    })
   
    document.querySelectorAll('input[name="gender"]').forEach(radio => {
        radio.addEventListener("change", (event) => {
            console.log("Selected Gender:", event.target.value);
        });
    });

    document.querySelectorAll('input[name="hobbies"]').forEach(checkbox => {
        checkbox.addEventListener("change", (event) => {
            console.log("Hobby Selected:", event.target.value, event.target.checked);
        });
    });

    // Form Submission
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const gender = document.querySelector('input[name="gender"]:checked')?.value || "Not Selected";
        const religion = document.querySelector('input[name="religion"]:checked')?.value || "Not Selected";
        const hobbies = Array.from(document.querySelectorAll('input[name="hobbies"]:checked')).map(item => item.value);

        const resultText = `
            <strong>First Name:</strong> ${firstName} <br>
            <strong>Last Name:</strong> ${lastName} <br>
            <strong>Gender:</strong> ${gender} <br>
            <strong>Gender:</strong> ${religion} <br>
            <strong>Hobbies:</strong> ${hobbies}
        `;

        resultDiv.innerHTML = resultText;
        resultDiv.style.display = "block";

        const studentObject = {
            firstName, // firstName: firstName
            lastName,
            gender,
            religion,
            hobbies
        }
        console.log("Form Submitted:", studentObject);
    });
;

