class Control<NodeType extends HTMLElement = HTMLElement> {
  public node: NodeType;

  constructor(parentNode: HTMLElement | null, tagName = 'div', classNames?: string, content?: string) {
    const elem = document.createElement(tagName);
    if (classNames) elem.classList.add(classNames);
    if (content) elem.textContent = content;
    if (parentNode) parentNode.append(elem);
    this.node = elem as NodeType;
  }

  public destroy(): void {
    this.node.remove();
  }
}

export default Control;
