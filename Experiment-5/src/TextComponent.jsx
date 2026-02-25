function TextComponent() {
    return (
        <div className="text-card">
            <h2>📄 Text Component (Loaded Immediately)</h2>
            <p>This component loaded immediately when the page rendered.</p>
            <p>
                Lazy loading is a design pattern that defers initialization of an object until
                it is needed. This helps improve performance by reducing the initial load time
                and saving bandwidth.
            </p>
            <p>
                Click the button below to lazy load the Image Component!
            </p>
        </div>
    );
}

export default TextComponent;
