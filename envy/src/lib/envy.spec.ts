describe('envy', () => {
  it('should work', () => {
    expect(process.env?.['ENVY']).toEqual('envy');
  });
});
