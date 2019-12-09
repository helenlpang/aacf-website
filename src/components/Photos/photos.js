import React from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import { photos } from "./photos2";


class Photos extends React.Component {
	render() {
		return (
           

		<div>
		<Gallery photos={photos} />;

		</div>

		   

		)
	}
}
export default Photos;



