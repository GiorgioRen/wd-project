import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard(props) {
	let title = "Titolo Mancante";
	let text = "Sei un dugo";
	return (
		<Card sx={{ mt: 1 }}>
			<CardActionArea>
				<CardMedia
					component="img"
					//height="140"
					image={props.image}
					alt={props.alt}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{props.title ? props.title : title}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{props.text ? props.text : text}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
