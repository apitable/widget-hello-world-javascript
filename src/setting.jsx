import React from 'react';
import { useSettingsButton } from '@apitable/widget-sdk';

export const Setting = () => {
  const [isSettingOpened] = useSettingsButton();

  return isSettingOpened ? (
    <div style={{ flexShrink: 0, width: '300px', borderLeft: 'solid 1px gainsboro', paddingLeft: '16px' }}>
      this is settings <br />
      Click the gear button in the upper right corner, or the toggle button of the setting attribute on the left to see my changes
    </div>
  ) : null;
};
