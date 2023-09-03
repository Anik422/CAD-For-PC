const match_score_row = (object) => (`
    <div class="match">
        <div class="wrapper">
            <button class="lws-delete" onclick="Javascript:deleteRow(${object.id});" data-deleteId="${object.id}" >
                <img src="./image/delete.svg" alt="" />
            </button>
            <h3 class="lws-matchName">${object.name}</h3>
        </div>
        <div class="inc-dec">
            <form onsubmit="return false" class="incrementForm">
                <h4>Increment</h4>
                <input
                    type="number"
                    name="increment"
                    class="lws-increment"
                    data-id="${object.id}"
                    onkeypress="Javascript:incrementValue(event);"
                />
            </form>
            <form  onsubmit="return false" class="decrementForm">
                <h4>Decrement</h4>
                <input
                    type="number"
                    name="decrement"
                    class="lws-decrement"
                    data-id="${object.id}"
                    onkeypress="Javascript:decrementValue(event);"
                />
            </form>
        </div>
        <div class="numbers">
            <h2 class="lws-singleResult" data-id="${object.id}">${object.singleResult}</h2>
        </div>
    </div>
    `);


const ROW_OBJECT = (id, name) => ({
    id: id,
    name: name,
    singleResult: 0
});

const TOTAL_HTML_ROW = [];

// select dom elements
const root = document.getElementById("root");
const lws_reset = document.querySelector(".lws-reset");
const add_Match = document.querySelector("#add_Match");



// initial state
const initialState = [];

// create reducer function
function counterReducer(state = initialState, action) {
    if (action.type === "addRow") {
        const row_data = state.length === 0 ? 0 : state[state.length - 1].id + 1;
        const object = ROW_OBJECT(row_data, action.playLoad.name);

        return (
            [
                ...state,
                object,
            ]
        );
    } else if (action.type === 'increment') {
        const total_array = state.map((item) => {
            if (item.id === parseInt(action.playLoad.id)) {
                return {
                    ...item,
                    singleResult: parseInt(item.singleResult) + parseInt(action.playLoad.value)
                }
            }
            else {
                return {
                    ...item,
                }
            }
        })
        return total_array;
    }
    else if (action.type === 'decrement') {
        const total_array = state.map((item) => {
            if (item.id === parseInt(action.playLoad.id)) {
                if (parseInt(item.singleResult) - parseInt(action.playLoad.value) < 0) {
                    return {
                        ...item,
                        singleResult: 0
                    }
                } else {
                    return {
                        ...item,
                        singleResult: parseInt(item.singleResult) - parseInt(action.playLoad.value)
                    }
                }
            }
            else {
                return {
                    ...item,
                }
            }
        })
        return total_array;
    } else if (action.type === "reset") {
        const total_array = state.map((item) => {
            return {
                ...item,
                singleResult: 0
            }
        })
        return total_array;
    } else if (action.type === "delete") {
        const total_array = state.filter((item) => item.id !== parseInt(action.playLoad.id));
        return total_array;
    } else {
        return state;
    }
}



// creat stor
const store = Redux.createStore(counterReducer);
const render = () => {
    const state = store.getState();
    const sumWithInitial = state.reduce((accumulator, currentValue) => accumulator + match_score_row(currentValue), '');
    root.innerHTML = sumWithInitial;
}

//update ui  
render();

store.subscribe(render);



// button click add match
add_Match.addEventListener('click', () => {
    let name = prompt('Enter match name :');
    store.dispatch({
        type: 'addRow',
        playLoad: {
            name: name
        }
    })
})

function incrementValue(event) {
    if (event.keyCode === 13) {
        let id = event.target.getAttribute('data-id');
        let value = event.target.value;
        store.dispatch({
            type: 'increment',
            playLoad: {
                id: id,
                value: value
            }
        })
        event.target.value = '';

    }
}

function decrementValue(event) {
    if (event.keyCode === 13) {
        let id = event.target.getAttribute('data-id');
        let value = event.target.value;
        store.dispatch({
            type: 'decrement',
            playLoad: {
                id: id,
                value: value
            }
        })
        event.target.value = '';

    }
}

function deleteRow(id) {
    const confrom_result = confirm("Are you sure you want to delete?")
    if (confrom_result) {
        store.dispatch({
            type: 'delete',
            playLoad: {
                id: id,
            }
        })
    }
}


lws_reset.addEventListener("click", (e) => {
    const confrom_result = confirm("Are you sure you want to reset?")
    if (confrom_result) {
        store.dispatch({
            type: 'reset',
        })
    }
})