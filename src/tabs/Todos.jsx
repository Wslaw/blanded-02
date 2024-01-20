import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Grid, GridItem, SearchForm, Text, Todo } from 'components';

export class Todos extends Component {
  state = {
    todos: [],
  };
  handleSubmit = text => {
    const todo = {
      id: nanoid(),
      text,
    };
    this.setState(prevState => ({
      todos: [...prevState.todos, todo],
    }));
  };

  deleteTodo = id => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== id),
    }));
  };
  render() {
    return (
      <>
        <Text>Todos</Text>
        <SearchForm onSubmit={this.handleSubmit} />
        <Grid>
          {this.state.todos.map(({ id, text }, index) => {
            return (
              <GridItem key={id}>
                <Todo
                  handleDelete={this.deleteTodo}
                  id={id}
                  text={text}
                  count={index + 1}
                />
              </GridItem>
            );
          })}
        </Grid>
      </>
    );
  }
}
