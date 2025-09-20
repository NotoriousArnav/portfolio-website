import React from 'react';
import 'xp.css/dist/98.css';

export function Win98Window({
  children,
  title="My Portfolio",
  titlebar_disabled=false,
  className = ''
}: {
  children: React.ReactNode;
  className?: string;
  title?: string;
  titlebar_disabled?: boolean
}) {
  return (
    <div className={"window " + className}>
      <div className="title-bar">
        <div className="title-bar-text">{title}</div>
        <div className="title-bar-controls">
          <button
            disabled={titlebar_disabled}
            aria-label="Minimize"
          />
          <button
            aria-label="Maximize"
            disabled={titlebar_disabled}
          />
          <button
            aria-label="Close"
            disabled={titlebar_disabled}
          />
        </div>
      </div>
        {children}
    </div>
  )
}

// Will take an Array of Strings for the Number of Fields to be shown
export function Win98StatusBar({
  fields = ["Ready"],
  className = ''
}: {
    fields?: string[];
    className?: string;
  }) {
  return (
    <div className={"status-bar " + className}>
      {fields.map((field, index) => (
        <div key={index} className="status-bar-field">
          {field}
        </div>
      ))}
    </div>
  )
}

export function Windows98CommandPrompt({
  children,
  className = ''
}:{
  children: React.ReactNode;
  render?: boolean;
  className?: string;
}) {
  return (
    <Win98Window title="Command Prompt" className={className + " " + "h-[85vh]"} >
      <div className="window-body">
        <pre
          id="command-prompt-body"
          className="overflow-x-scroll overflow-y-scroll h-[82vh]"
        >
          {children}
        </pre>
      </div>
    </Win98Window>
  )
}
