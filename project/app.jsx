// Main app
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "cream",
  "density": "default",
  "dark": false
}/*EDITMODE-END*/;

const App = () => {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-palette', t.palette);
    root.setAttribute('data-density', t.density);
    root.setAttribute('data-dark', String(!!t.dark));
  }, [t.palette, t.density, t.dark]);

  return (
    <>
      <SiteHeader t={t} />
      <main id="top">
        <Hero t={t} />
        <Concept t={t} />
        <Designs t={t} />
        <FAQ t={t} />
        <FinalCTA t={t} />
      </main>
      <SiteFooter t={t} />

      <TweaksPanel title="Tweaks">
        <TweakSection title="ムード">
          <TweakRadio
            label="ダークモード"
            value={t.dark ? 'on' : 'off'}
            options={[
              { value: 'off', label: 'Light' },
              { value: 'on', label: 'Dark' },
            ]}
            onChange={(v) => setTweak('dark', v === 'on')}
          />
        </TweakSection>
        <TweakSection title="カラーパレット">
          <TweakColor
            label="トーン"
            value={t.palette}
            options={[
              { value: 'cream', color: ['#f6efe2', '#b8633a', '#3d2f24'] },
              { value: 'forest', color: ['#fbf6ee', '#6f8a5b', '#2d2f25'] },
              { value: 'terracotta', color: ['#fdf4e8', '#d97a4e', '#2f2722'] },
              { value: 'sand', color: ['#f4ede0', '#a8845a', '#3a2d1f'] },
            ]}
            onChange={(v) => setTweak('palette', v)}
          />
        </TweakSection>
        <TweakSection title="レイアウト">
          <TweakRadio
            label="余白"
            value={t.density}
            options={[
              { value: 'compact', label: 'Compact' },
              { value: 'default', label: 'Normal' },
              { value: 'airy', label: 'Airy' },
            ]}
            onChange={(v) => setTweak('density', v)}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
