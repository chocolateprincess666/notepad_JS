
const titleInput = document.createElement('title');
const noteInput = document.createElement('note');

const myButton = document.getElementById('button');

const myTbody = document.getElementById('tbody');

    

        myButton.addEventListener('click', function(e) {
            e.preventDefault();

           

            //created elements
            const row = document.createElement('tr');

            const tdTitle = document.createElement('td');//<td>
            tdTitle.innerText = titleInput.value;

            const tdNote = document.createElement('td');//<td>
            tdNote.innerText = titleInput.value;

            const tdDate = document.createElement('td');//<td>

            /*
            const myTitle = titleInput.value;
            const myNote = noteInput.value;
            tdTitle.innerText = myTitle;
            tdNote.innerText = myNote;
*/

            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();

            today = mm + '/' + dd + '/' + yyyy;
            tdDate.innerHTML = today;



            row.appendChild(tdTitle);
            row.appendChild(tdNote);
            row.appendChild(tdDate)

            myTbody.appendChild(row);

        });

