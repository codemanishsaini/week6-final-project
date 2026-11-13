
let students = [];

const form = document.getElementById('studentForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const studentList = document.getElementById('studentList');
const studentCount = document.getElementById('studentCount');


form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  
  const name = nameInput.value;
  const email = emailInput.value;

  
  if (name === '' || email === '') {
    alert('Please fill all details!');
    return;
  }

  
  const newStudent = {
    name: name,
    email: email
  };
  
  students.push(newStudent); 

  
  form.reset();

  
  showStudents();
});


function showStudents() {
  studentList.innerHTML = ''; 
  studentCount.innerText = students.length; 

 
  for (let i = 0; i < students.length; i++) {
    const student = students[i];

   
    const div = document.createElement('div');
    div.className = 'student-card';

    div.innerHTML = `
      <h3>${student.name}</h3>
      <p>📧 ${student.email}</p>
      <button class="btn-delete" onclick="deleteStudent(${i})">Delete</button>
    `;


    studentList.appendChild(div);
  }
}

function deleteStudent(index) {
  students.splice(index, 1); 
  showStudents(); // 
}