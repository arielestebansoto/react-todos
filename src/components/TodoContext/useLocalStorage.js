import React from 'react'

export function useLocalStorage(itemName, initialValue) {
    const [ loading, setLoading ] = React.useState(true)
    const [ error, setError ] = React.useState(false)
    // window.localStorage.removeItem(itemName)
    const [ item, setItem ] = React.useState(initialValue)
  
    React.useEffect( () => {
      try {
          setTimeout( () => {
            const localStorageItem = localStorage.getItem(itemName)
            let parsedItem
            
            if (!localStorageItem) {
              localStorage.setItem(itemName, JSON.stringify(initialValue))
              parsedItem = initialValue
            } else {
              parsedItem = JSON.parse(localStorageItem)
            }
            setItem(parsedItem)
            setLoading(false)
          },  1000)
        } catch (err) {
          setError(err)
        }
    }, [itemName, initialValue])
  
  
    const saveItem = (newItem) => {
      try {
        const stringifiedItem = JSON.stringify(newItem)
        localStorage.setItem(itemName, stringifiedItem)
        setItem(newItem)
      } catch (err) {
        setError(err)
      }
      }
  
    return {
      item, 
      saveItem,
      loading,
      error 
    }
  }