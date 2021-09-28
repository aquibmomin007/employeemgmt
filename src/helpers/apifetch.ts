import { EMPLOYEE_URL } from "./constant"
  
export const fetchEmployeeDataPresent = async (name:string) => {
  const result = await window.fetch(encodeURI(EMPLOYEE_URL + name))
  const data = await result.json()

  return data.length > 0
}

const getNodeBackground = (level: number) => {
  switch (level) {
    case 0:
      return '#faad14'
    case 1:
      return '#f78485'
  }
  return '#7ec1ff'
}

export const fetchNode = async (name: string, nodes: any[], edges: any[], level: number) => {
  if (!name) return
  
  const result = await window.fetch(encodeURI(EMPLOYEE_URL + name))
  const [position, meta] = await result.json()

  if (!nodes.find(n => n.id === name)) {
    nodes.push({
      id: name,
      label: `${name.toUpperCase()}\n\n(${position})`,
      level,
      title: position,
      shape: 'box',
      margin: 4,
      color: {
        background: getNodeBackground(level),
        border: 'black'
      },
      borderWidth: 2,
    })
  } else {
    return
  }

  if (!meta || !meta['direct-subordinates'] || !meta['direct-subordinates'].length) return
  
  const subordinates = meta['direct-subordinates']
  
  for (let i = 0; i < subordinates.length; i++) {
    const subname = subordinates[i]
    
    edges.push({
      from: name,
      to: subname,
      label: level === 0 ? 'direct' : ''
    })

    await fetchNode(subname, nodes, edges, level+1)
  }
}

export const fetchEmployeeDataForGraph = async (name: string) => {
  const nodes: any[] = []
  const edges: any[] = []

  await fetchNode(name, nodes, edges, 0)

  return [nodes, edges]
}