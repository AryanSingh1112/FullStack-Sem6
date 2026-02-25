import landscapeImage from './assets/lazy_load_landscape.png';

function ImageComponent() {
    return (
        <div className="image-card">
            <h2>🖼️ Image Component (Lazy Loaded)</h2>
            <p>This component was lazy loaded only when you clicked the button!</p>
            <div>
                <img
                    src={landscapeImage}
                    alt="Beautiful landscape"
                />
            </div>
        </div>
    );
}

export default ImageComponent;
