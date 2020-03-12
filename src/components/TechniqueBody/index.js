import React, {useState, useEffect, useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export default function TechniqieBody({TextEditor}) {
  const classes = useStyles();
  const component = useRef(null);
  
  const [description, setDescription] = useState({})
  const [motivation, setMotivation] = useState({})
  const [steps, setSteps] = useState({})
  
  
  useEffect(() => {
    loadData()
    console.log(component.current)
  },[])
  
  async function loadData(){
    const {data} =  await axios.get(`http://localhost:3000/api/techniques`)
    const latestTech = data.pop()

    console.log(latestTech)

    const values = {
      description: JSON.parse(latestTech.description),
      motivation: JSON.parse(latestTech.aim),
      steps: JSON.parse(latestTech.how)
    }

    setDescription(values.description)
    setMotivation(values.aim)
    setSteps(values.how)
  }
        
  
  
  const handleSave = () => {
    console.log('description', description)
    console.log('motivation', motivation)
    console.log('steps', steps)
    
    const payload = {
      title: 'A ground breaking technique', 
      aim: JSON.stringify(motivation), 
      description: JSON.stringify(description),
      how: JSON.stringify(steps)
    }
    
    axios.post(`http://localhost:3000/api/techniques`, payload)
    .then( (data) => console.log(data))
    
  }
  

  return (
    <div className={`readable ${classes.root}`}>
      <section id="description">
        <div>
          <h4 className="typography__heading-four">Technique Name</h4>
          <div className="text-editor-container">
            <TextEditor holder="description-editor"
              data={description}
              ref={el => this.component = el}
              onData={(data) => {
                data().then(res => console.log(res)).catch(error => console.log(error))
              }}
              onChange={(e) => setDescription(e)}
              />
          </div>
          {/* <p className="typography__paragraph">
              This is a paragraph body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
          dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
    
          </p> */}
        </div>
      </section>
      <section id="motivation">
        <h5 className="typography__heading-five">Motivation</h5>
        <div className="text-editor-container">
          <TextEditor holder="motivation-editor"
            data={motivation}
            onData={(data) => console.log(data)}
            onChange={(e) => setMotivation(e)}
            />
        </div>
        {/* <p className="typography__paragraph">
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
          dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam. body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
          dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.

          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
          dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
        </p> */}

      </section>
      <section id="steps">

        <h5 className="typography__heading-five">
          Steps
        </h5>
        <div className="text-editor-container">
            <TextEditor holder="steps-editor"
              data={steps}
              onData={(data) => console.log(data)}
              onChange={(e) => setSteps(e)}
            />
          </div>
        {/* <h6 className="typography__heading-six">
          Step 1
        </h6>
        <p className="typography__paragraph">
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
          dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.

          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
          dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
        </p>

        <h6 className="typography__heading-six">
          Step 2
        </h6>
        <p className="typography__paragraph">
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
          dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.

          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
          dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
        </p>
        <h6 className="typography__heading-six">
          Step 3
        </h6>
        <p className="typography__paragraph">
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
          dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.

          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
          dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
        </p> */}
      </section>

      <br/>
      <br/>
      <button className="dl-btn dl-btn__dark" onClick={handleSave}>Save</button>
      <button className="dl-btn dl-btn__secondary" onClick={loadData}>load</button>
    </div>
  );
}
