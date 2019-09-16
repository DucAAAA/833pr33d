import React from "react"
import SyntaxHighlighter from "react-syntax-highlighter"
import { iconList } from "icomoon-react"

import IconMoon from "components/ui/iconmoon"
import Button from "components/ui/button"
import Dropdown from "components/ui/dropdown"

import iconSet from "assests/fonts/selection.json"
import styles from './demo-ui.module.scss'

const DemoUI = () => {
  const dropdown = [
    {
      label: "Detail",
      onClick: () => console.log('1')
    },
    {
      label: "Change Template name",
      onClick: () => console.log('2')
    },
    {
      label: "Move",
      onClick: () => console.log('3')
    },
    {
      label: "Delete",
      onClick: () => console.log('4'),
      bottomLine: true
    },
    {
      label: "Export Metadata",
      onClick: () => console.log('5')
    }
  ]
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>
        <h2>Icons</h2>
        <SyntaxHighlighter language="javascript">
          {`import IconMoon from "components/ui/iconmoon"\n\n<IconMoon icon="arrow-left" size={25} />`}
        </SyntaxHighlighter>
        <div className={styles.icons}>
          {iconList(iconSet).map((i, idx) => (
            <div key={idx} className={styles.iconItem}>
              <IconMoon icon={i} size={25}/>
              <span>{i}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2>Components</h2>
        <div>
          <h3>Buttons</h3>
          <SyntaxHighlighter language="javascript">
            {`import Button from "components/ui/button" \n\n<Button type="default" icon="check">Default</Button>`}
          </SyntaxHighlighter>
          <div className={styles.groupComponents}>
            <div className={styles.itemComponent}>
              <span>Default [type]</span>
              <Button type="default" icon="check">Default</Button>
            </div>
            <div className={styles.itemComponent}>
              <span>Primary [type]</span>
              <Button type="primary" icon="plus">primary</Button>
            </div>
          </div>
        </div>
        <div>
          <h3>Dropdown</h3>
          <SyntaxHighlighter>
            {
              `
              import Dropdown from "components/ui/dropdown"\n

              const dropdown = [
                {
                  label: "Detail",
                  onClick: () => console.log('1')
                },
                {
                  label: "Change Template name",
                  onClick: () => console.log('2')
                },
                {
                  label: "Move",
                  onClick: () => console.log('3')
                },
                {
                  label: "Delete",
                  onClick: () => console.log('4'),
                  bottomLine: true
                },
                {
                  label: "Export Metadata",
                  onClick: () => console.log('5')
                }
              ]

              <Dropdown data={dropdown} height="3.2rem" inlineStyle={{top: "2.6rem", right: "-1rem"}}>
                <Button type="primary" icon="plus">primary</Button>
              </Dropdown>
              `
            }
          </SyntaxHighlighter>
          <div className={styles.groupComponents}>
            <div className={styles.itemComponent}>
              <Dropdown className={styles.dropdown} data={dropdown} height="3.2rem" inlineStyle={{right: "-4rem"}}>
                <Button style={{marginLeft: "10rem"}} type="primary" icon="plus">primary</Button>
              </Dropdown>
              <div>
                <h3>Attributes data</h3>
                <div><b>onClick:</b> function</div>
                <div><b>bottomLine:</b> bool</div>
                <div><b>label:</b> string</div>
                <p><b>Max level is 2</b></p>
                <h3>Props </h3>
                <div><b>height:</b> string - item's height</div>
                <div><b>inlineStyle:</b> Object - <b>NOT STYLE OF CONTAINER, THIS IS STYLE OF MENU</b>custom position v.v..</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DemoUI
