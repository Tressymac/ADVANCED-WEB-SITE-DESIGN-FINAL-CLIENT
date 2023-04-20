import Accordion from 'react-bootstrap/Accordion';
import '../quiz/quiz.css'

function StateQuiz() {
  return (

    <div className='quiz'>
        <h2>US state quiz</h2>
        <Accordion>

            <Accordion.Item eventKey="0">
                <Accordion.Header>What is the nickname of the state of Florida?</Accordion.Header>
                <Accordion.Body>
                    Answer: The Sunshine State.
                </Accordion.Body>
            </Accordion.Item>
            
            <Accordion.Item eventKey="1">
                <Accordion.Header>What is the state bird of California?</Accordion.Header>
                <Accordion.Body>
                    Answer: The California quail.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
                <Accordion.Header>What is the state capital of Texas?</Accordion.Header>
                <Accordion.Body>
                    Answer: Austin.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
                <Accordion.Header>What state is home to the Grand Canyon?</Accordion.Header>
                <Accordion.Body>
                    Answer: Arizona.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
                <Accordion.Header>What is the state flower of New York?</Accordion.Header>
                <Accordion.Body>
                    Answer: The rose.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5">
                <Accordion.Header>What is the nickname of the state of Vermont?</Accordion.Header>
                <Accordion.Body>
                    Answer: The Green Mountain State.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="6">
                <Accordion.Header>What is the state tree of Georgia?</Accordion.Header>
                <Accordion.Body>
                    Answer: The live oak.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="7">
                <Accordion.Header>What state is home to Mount Rushmore?</Accordion.Header>
                <Accordion.Body>
                    Answer: South Dakota.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="8">
                <Accordion.Header>What is the state capital of Kentucky?</Accordion.Header>
                <Accordion.Body>
                    Answer: Frankfort.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="9">
                <Accordion.Header>What is the state motto of Nevada?</Accordion.Header>
                <Accordion.Body>
                    Answer: "All for our country."
                </Accordion.Body>
            </Accordion.Item>

        </Accordion>
    </div>
  );
}

export default StateQuiz;