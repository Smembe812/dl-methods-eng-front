import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import EditorToJSX from '../EditorToJSX'
import {
  Link,
  NavLink
} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

const BASE_URL = process.env.REACT_APP_BACKEND_SERVER

export default function Element({limit = null, name, apiRoute,}) {
  const classes = useStyles();
  
  const [elements, setElements] = useState([])

  const [viewConfig, setViewConfig] = useState("grid")

  const [cardLimit, setCardLimit] = useState(() => limit ? limit : 9 )

  
  useEffect(() => {
    loadData()
  },[])
  

  async function loadData(){
    const {data} =  await axios.get(`${BASE_URL}${apiRoute}`)

    const reduceElements = data.filter((item) => {
      if (item.how && item.description){
        return item
      }
    })

    setElements(reduceElements)
  }


  const renderElements = (elements) => {

    return elements.map( ({title, description, how, id}, index) => {
      description = JSON.parse(description)
      const hyphenetedTitle = title.toLowerCase().split(' ').join('-')
      

      if (how && description && (index < cardLimit)){
        return (
          <div className={viewConfig === "grid" ? "item grid__col-3" : "item grid__col-12"} key={id}>
            <div className={viewConfig === "grid" ? "card card__grid" : "card card__list"}>
                  <div className="card__header">
                      <span className="card__header-text">Technique</span>
                  </div>
                  <div className={viewConfig === "grid" ?"card__body--grid" : "card__body"}>
                      <h5 className="card__title">
                          {title}
                      </h5>
                      <EditorToJSX 
                        data={description}
                        options={
                          {paragraphClassName:"card__text"}
                        }
                        />
                  </div>
                  <div className="card__footer">
                    <NavLink to={`/${apiRoute}/writing/${hyphenetedTitle}`} className="link" onClick={()=>localStorage.setItem(`${name.toLowerCase()}Id`, id)}>
                      explore more
                    </NavLink>
                  </div>
              </div>
          </div>
        )
      }

      return <></>

    }

    )
  }

  return (
    <>
      <div className="grid toolbar toolbar__box-shadow">
        <div className="grid__box--uniform">
            <div className="grid__col">
                <div className="toolbar__title">
                    <span className="toolbar__list-item-text">
                        {name} > <Link className="link" to={`${apiRoute}`}>explore more</Link>
                    </span>
                </div>
            </div>
            <div className="toolbar__list grid__col flex flex__justify-end">
                <div 
                    className={viewConfig === "grid" ? "toolbar__list-item toolbar__list-item--active":  "toolbar__list-item"} 
                    onClick={() => setViewConfig("grid")}> 
                    <i className="material-icons">view_module</i>
                </div>
                <div 
                  className={viewConfig === "list" ? "toolbar__list-item toolbar__list-item--active":  "toolbar__list-item" }
                  onClick={() => setViewConfig("list")}>
                    <i className="material-icons">view_list</i>
                </div>
            </div>           
        </div>
    </div>

    <div className="grid" style={{margin: (viewConfig === "grid" ? "unset" : "0 13%")}}>
        <div className="grid__box grid__gap">
            {renderElements(elements)}
        </div>
    </div>
     
    </>
  );
}
