
import React from 'react'
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { useClickOutside } from './hooks/useClickOutside';
import './App.css';
import FormItem from './components/FormItem';
import * as CgIcons from 'react-icons/cg';
import { RotatingLines } from 'react-loader-spinner';

export const App = () => {

  const [findProjects, setFindProjects] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(true);
  const inputRef = useRef(null);

  useEffect(() => {
    getProject()
    // const timer = inputValue.length > 0 && setTimeout(() => getProject(inputValue), 200)
    // return () => {
    //   timer && clearTimeout(timer)
    // }
  }, [])

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus()
  }, [])

  const itemClick = (e) => {
    setInputValue(e.target.textContent);
    setIsOpen(!isOpen);
  }
  const inputClick = () => {
    setIsOpen(true);
  }

  const searchProject = (e) => {
    setInputValue(e.target.value)
  }

  const getProject = (name) => {
    axios({
      method: 'post',
      mode: "cors",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      url: `http://localhost:3005/certificates`,
      data: {
        inputProject: name
      }
    }).then(response => {
      response.data && setFindProjects(response.data)
    })
      .catch(error => console.error(error))
  }
  const filteredInputDomains = findProjects.filter(el => el.domain.toLowerCase().includes(inputValue.toLowerCase()));

  const formRef = useRef(null)

  useClickOutside(formRef, () => {
    console.log(formRef)
    // setIsOpen(false)    
  });

  return (
    <div className='main_container'>
      <div className='search-form'>
        {/* <label className='search-form__input--name'>Проекты</label>
        <div className='amount_project'>Количество: {findProjects.length}</div> */}

        <div className='container_input'>
          <input
            className='search-form__input'
            type="text"
            placeholder='Выберите проект...'
            onChange={searchProject}
            onClick={inputClick}
            ref={inputRef}
            value={inputValue}
          />
          {/* {
            inputValue
              ? */}
          <CgIcons.CgCloseR
            onClick={() => setInputValue('')}
            style={{
              color: '#d0d0d1',
              position: 'relative',
              right: '30px',
              width: '20px',
              height: '20px',
              cursor: 'pointer'
            }}
          />
          {/* :
              null
          } */}

        </div>

        <div className='container_list'>
          {
            inputValue && isOpen
              ?
              <ul className='auto-complete'>

                {filteredInputDomains.map((el, index) => <li key={index} className='auto-complete_item' onClick={itemClick}>
                  {el.domain}
                </li>)}

              </ul>
              :
              null
          }

          {findProjects.length === 0
            ?
            <div style={{ marginTop: '150px' }}>
              <RotatingLines

                strokeColor="#3d87b8"
                strokeWidth="2.5"
                animationDuration="0.8"
                width="50"
                visible={true}
              />
            </div>
            :

            <div className='search-form__menu-list'>
              {filteredInputDomains.length > 0
                ?
                !!filteredInputDomains && filteredInputDomains.map((el, index) =>
                  <FormItem el={el} key={index} itemClick={itemClick} />)
                :
                'таких проектов нет'
              }
            </div>
          }

        </div>
      </div>
    </div>
  );
}
