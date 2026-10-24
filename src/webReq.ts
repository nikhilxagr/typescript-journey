import axios, {AxiosResponse} from 'axios';

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const fetchData = async () => {
    try {
        const response: AxiosResponse<Todo> = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        const todo: Todo = response.data;
        console.log(todo);
    } catch (error: any) {
        if ( axios.isAxiosError(error)) {
            console.error('Axios error: ', error.message);
            if (error.response) {
                console.error('Response data: ', error.response.data);
                console.error('Response status: ', error.response.status);
                console.error('Response headers: ', error.response.headers);
            }
        }
    }
}

// Call the fetchData function to execute the request
const fetchDataNew = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const todo: Todo = await response.json();
        console.log(todo);
    } catch (error: any) {
        console.error('Fetch error: ', error.message);
    }
}

fetchDataNew();