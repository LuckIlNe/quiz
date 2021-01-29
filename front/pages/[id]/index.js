import React, { Component } from 'react'
import Main from '../../components/main'
import Router from 'next/router';

/*
export async function  getServerSideProps({query}) {
  console.log(query.id); // the param name is the part in [] in your filename

  return {
    props: {
      'id' : query.id,
    }
  }; // you can now access this as this.props.query in your page
}
*/

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths =  {
    id: "123",
    id: '122',
  }
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  console.log(params.id)
  return {
    props: {
      id: params.id
    }
  }
}

export default class extends Component {
  render () {
    return (
        <Main/>
    )
  }
}