import React from 'react';

export function CardComponent(props) {
  return (
    <div className="clr-row" style={{ margin: '2rem' }}>
      <div className="clr-col-lg-5 clr-col-md-8 clr-col-12">
        <div className="card">
          <div className="card-header">Header</div>
          <div className="card-block">
            <div className="card-title">Block</div>
            <div className="card-text">{props.message}</div>
          </div>
          <div className="card-footer">
            <button className="btn btn-sm btn-link" onClick={() => alert('great')}>
              Footer Action
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
