import React from 'react'
import Story from './Story'
import { spawn } from 'child_process';
import { connect } from 'react-redux'
import { doArchiveStory } from '../actions/archive'
import {getReadableStories  } from '../selectors/story'
const COLUMNS = {
    title: {
      label: 'Title',
      width: '40%',
    },
    author: {
      label: 'Author',
      width: '30%',
    },
    comments: {
      label: 'Comments',
      width: '10%',
    },
    points: {
      label: 'Points',
      width: '10%',
    },
    archive: {
      width: '10%',
    },
  };
const Stories=({stories})=> {
  return (
    <div className="stories">
    <StoriesHeader columns={COLUMNS}></StoriesHeader>



      {(stories || []).map(story=>
        <Story key={story.objectID} story={story} columns={COLUMNS}></Story>
        
        )}
    </div>
  )
}

const StoriesHeader=({columns})=>
<div className="stories-header">
{Object.keys(columns).map(key=>
<span key={key} style={{width: columns[key].width}}>
{columns[key].label}
</span>
)}
</div>

const mapState = state =>({
    stories: getReadableStories(state)
})

export default connect(mapState)(Stories)