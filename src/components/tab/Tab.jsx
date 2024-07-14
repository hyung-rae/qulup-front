import { Tabs, rem } from '@mantine/core'
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react'
import classes from './Tab.module.css'

const Tab = props => {
  const { contents = [], setTabValue, style } = props

  return (
    <Tabs variant="unstyled" defaultValue="email" classNames={classes} style={style}>
      <Tabs.List grow>
        {contents.map((tab, index) => (
          <Tabs.Tab
            value={tab.value}
            leftSection={tab.icon}
            onClick={() => setTabValue(tab.value)}
            key={`${tab.value}_${index}`}
          >
            {tab.title}
          </Tabs.Tab>
        ))}
      </Tabs.List>
    </Tabs>
  )
}

export default Tab
