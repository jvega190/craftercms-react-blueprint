import React, { Suspense } from 'react';
import { ExperienceBuilder, RenderField } from '@craftercms/experience-builder/react';
import { ContentInstance } from '@craftercms/models';
import { getModel } from './lib/api';
import { BASE_URL } from './constants';
import { isAuthoring } from './utils';
import './App.css';

function App() {
  const [model, setModel] = React.useState<ContentInstance>();

  React.useEffect(() => {
    getModel().subscribe((model) => {
      setModel(model instanceof Array ? model[0] : model);
    });
  }, []);

  return (
    <Suspense
      fallback={
        <div />
      }
    >
      <div className="App" role="main">
        {model && (
          <ExperienceBuilder
            isAuthoring={isAuthoring()}
            path={model.craftercms?.path}
          >
            <header className="App-header">
              <RenderField
                model={model}
                fieldId="headText_s"
                component="p"
              />
              <RenderField
                model={model}
                fieldId="logo_s"
                render={(logo, fieldId) => (<img src={`${BASE_URL}${logo}`} className="App-logo" alt="logo" />)}
              />
              <RenderField
                model={model}
                fieldId="subtitle_s"
                component="p"
              />
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
              <div>
                <div className="App-note">
                <RenderField
                    model={model}
                    fieldId="body_html"
                    render={(value, fieldId) => (<div dangerouslySetInnerHTML={{ __html: value }} />) }
                  />
                </div>
              </div>
            </header>
          </ExperienceBuilder>
        )}
      </div>
    </Suspense>
  );
}

export default App;
