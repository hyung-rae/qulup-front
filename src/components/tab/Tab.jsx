import { Tabs } from '@mantine/core'
import classes from './Tab.module.css'

const Tab = props => {
  const { contents = [], defaultValue = '', setTabValue, additionalData = null, style } = props

  return (
    <Tabs variant="unstyled" defaultValue={defaultValue} classNames={classes} style={style}>
      <Tabs.List grow>
        {contents.map((tab, index) => (
          <Tabs.Tab
            value={tab.value}
            leftSection={tab.icon}
            onClick={() => setTabValue(tab.value)}
            key={`${tab.value}_${index}`}
          >
            {tab.title} {additionalData ? `(${additionalData[tab.value]})` : null}
          </Tabs.Tab>
        ))}
      </Tabs.List>
    </Tabs>
  )
}

export default Tab
