import React from 'react'

const Card = (props) => {

	const data = props.data;
	
	// const list = props.currentList.filter(item => item.media_type === "image").map((item, index) => {
	// 	return <ListItem item={item} key={index} onClickFn={props.onClickFn} /> });

	return (
		<div>
			{
				data 
				? 
				(data.map(element => {
					return (
						<>
							<h2>{element.title}</h2>
							<img src={element.url}></img>
							<p>{element.explanation}</p>
						</>
					)
				}))
				: 
				("loading...")
			}
			
		</div>
	)
}

export default Card
