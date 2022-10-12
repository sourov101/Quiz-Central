
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';


const Quizes = () => {
    const data = useLoaderData();
    const quizes = data.data;



    return (
        <div>
            <h1>Quiz About {quizes.name}</h1>
            <div className='quizes-container'>
                <div>

                    {
                        quizes.questions.map(quiz => <Quiz key={quiz.id} quiz={quiz} ></Quiz>)

                    }
                </div>

            </div>
        </div>
    );
};

export default Quizes;