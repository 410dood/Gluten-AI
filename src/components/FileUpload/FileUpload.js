import React, {Component} from 'react';
import {render} from 'react-dom';

class Main extends Component {

    uploadWidget() {
        window
            .cloudinary
            .openUploadWidget({
                cloud_name: 'CLOUD_NAME',
                upload_preset: 'PRESET',
                tags: ['xmas']
            }, function (error, result) {
                console.log(result);
            });
    }
    render() {
        return (
            <div className="main">
                <h1>Galleria</h1>
                <div className="upload">
                    <button
                        onClick={this
                        .uploadWidget
                        .bind(this)}
                        className="upload-button">
                        Add Image
                    </button>
                </div>
            </div>

        );
    }
}

render(
    <Main/>, document.getElementById('container'));

export default Main