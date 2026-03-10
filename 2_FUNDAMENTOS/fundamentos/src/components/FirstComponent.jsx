// 1 - criando component

import MyComponent from "./MyComponent";

const FirstComponent = () => {
    return (
        <div>
            <h2>Meu primeiro componente</h2>
            {/* Comentário dentro do jsx */}
            <MyComponent />
        </div>
    );
};

export default FirstComponent;