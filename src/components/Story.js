import React from 'react'
import Button from './Button'
import {connect} from 'react-redux'
import { doArchiveStory } from '../actions/archive';
const Story=({story,columns,onArchive}) =>{
    const {
        title,
        url,
        author,
        num_comments,
        points,
        objectID
    } = story;
  return (
    <div className="story">
      <span style={{width: columns.title.width}}>
          <button type="button" className="button-inline" onClick={()=>onArchive(objectID)}>Archive</button>
      </span>
      <span style={{width: columns.author.width}}>{author}</span>
      <span style={{width: columns.comments.width}}>{num_comments}</span>
      <span style={{width: columns.archive.width}}>
      <ButtonInline onClick={()=>onArchive(objectID)}>
      Archive
      </ButtonInline>
      
      </span>
    </div>
  );
}
const ButtonInline = ({
    onClick,
    type= 'button',
    children
})=> <Button type={type} className="button-inline" onClick={onClick}>
    {children}
</Button>

const mapDispatch = dispatch =>({
    onArchive: id => dispatch(doArchiveStory(id))
})
export default connect(null,mapDispatch)(Story)