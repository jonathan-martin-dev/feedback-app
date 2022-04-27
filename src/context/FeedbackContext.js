import React from 'react';
import { createContext, useState, useEffect } from 'react';
import {v4 as uuidv4 } from 'uuid'


const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    useEffect(() =>{
        console.log(123)
    }, [])

    //Delete Feedback
    const deleteFeedback = (id) => {
        if (window.confirm(`Are you sure you want to delete`)) {
          setFeedback(feedback.filter((item) => item.id !== id))
        }
      }
      
      //Add Feedback
      const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
      }

      //Set item to be updated
      const editFeedback = (item) => {
          setFeedbackEdit({
              item, 
              edit: true
          })
      }

      const updateFeedback = (id, updItem) => {
          setFeedback(feedback.map((item) => item.id === id ? {
              ...item, ...updItem } : item))
          } 
    

    return (
    <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback
    }}>
        { children }
    </FeedbackContext.Provider>
    )
}

export default FeedbackContext