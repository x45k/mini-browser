javascript:(function(){var d=document;while(d.body.firstChild)d.body.removeChild(d.body.firstChild);var lastUrl='';function createInterface(){var container=d.createElement('div');container.style.position='fixed';container.style.top='0';container.style.left='0';container.style.width='100%';container.style.height='100%';container.style.zIndex='10000';container.style.backgroundColor='#f0f0f0';container.style.border='1px solid #ccc';container.style.padding='10px';container.style.boxShadow='0 0 10px rgba(0,0,0,0.5)';container.style.overflow='auto';var header=d.createElement('div');header.style.display='flex';header.style.justifyContent='flex-end';header.style.marginBottom='5px';var closeBtn=d.createElement('button');closeBtn.innerText='×';closeBtn.style.border='none';closeBtn.style.background='none';closeBtn.style.cursor='pointer';closeBtn.style.fontSize='16px';closeBtn.addEventListener('click',function(){d.body.removeChild(container);setTimeout(createInterface,1000);});var input=d.createElement('input');input.style.width='100%';input.style.padding='5px';input.style.boxSizing='border-box';input.placeholder='Enter URL...';var iframe=d.createElement('iframe');iframe.style.width='100%';iframe.style.height='calc(100vh - 50px)';iframe.style.border='2px solid #000';iframe.style.backgroundColor='#fff';iframe.style.marginTop='5px';iframe.src=lastUrl||'about:blank';iframe.setAttribute('sandbox','allow-scripts allow-same-origin allow-forms allow-popups allow-modals allow-top-navigation');function closeContainer(){d.body.removeChild(container);setTimeout(createInterface,1000);}var lastSrc=iframe.src;var intervalId=setInterval(function(){if(iframe.src!==lastSrc){lastSrc=iframe.src;lastUrl=lastSrc;closeContainer();}},100);input.addEventListener('keypress',function(e){if(e.key==='Enter'){var url=input.value.startsWith('http')?input.value:'https://'+input.value;iframe.src=url;lastUrl=url;}});header.appendChild(closeBtn);container.appendChild(header);container.appendChild(input);container.appendChild(iframe);d.body.appendChild(container);container.addEventListener('DOMNodeRemoved',function(){clearInterval(intervalId);});}createInterface();})();
