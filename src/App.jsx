import Header from './components/Header';
import Invoice from './components/Invoice';
import Product from './components/Product';
import Summary from './components/Summary';

function App() {
  return (
    <>
      <div className='relative'>
        <Header className="absolute z-10 mt-[98px]" />
        <div className='absolute z-20 top-40 left-1/2 transform -translate-x-1/2 flex flex-col lg:flex-row justify-center gap-8 '>
          <div className='flex flex-col gap-8'>
            <Product />
            <Invoice />
          </div>
          <Summary />
        </div>
      </div>
    </>
  );
}

export default App;
