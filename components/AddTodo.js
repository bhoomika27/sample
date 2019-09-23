import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import bindActionCreators from 'redux'

const AddTodo = ({ dispatch }) => {
  let input
  

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          // this.props.
           dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}
// const mapDispatchToProps =(dispatch)=>{
//   return bindActionCreators({
//     addTodo:actionType.addTodo,
//   },dispatch)
// }

// const const mapStateToProps = (state) => {
//   return {
//     todod: state.todos
//   }
// }
export default connect()(AddTodo)