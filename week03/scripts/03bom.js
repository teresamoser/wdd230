const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
const chaptersArray = document.getChapterList() || [];

chaptersArray.forEach(chapter => {displayList(chapter);})
button.addEventListener('click', () => {
if (input.value != '') { 
    displayList (input.value);
    chaptersArray.push(input.value);
    setChapterList();
    input.value = '';
    input.focus();
    } 
function displayList(item){
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    list.append(li);
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
        })
    }
function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
    }
function getChapterList(){
    return JSON.parse(localStorage.getItem('myFavBOMList'));
    }
chapter = chapter.slice(0, chapter.length - 1)
chaptersArray = chaptersArray.filter((item) => item !== chapter);

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
        }
    // const li = document.createElement('li');
    // const deleteButton = document.createElement('button');
    // li.textContent = input.value;
    // deleteButton.textContent = '❌';
    // li.append(deleteButton);
    // list.append(li);
    //     deleteButton.addEventListener('click', function () {
    //     list.removeChild(li);
    //     input.focus();
        // });
    input.focus();
    input.value = '';	
});

