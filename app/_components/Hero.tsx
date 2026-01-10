import React from 'react';

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from '@/components/ui/input-group';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Send } from 'lucide-react';
import { QUICK_VIDEO_SUGGESTIONS } from '@/data/constants';

const Hero = () => {
  return (
    <div className='flex items-center flex-col mt-20'>
      <div className=''>
        <h2 className='text-4xl font-bold'>
          Learn the best way to code using AI
        </h2>
        <p className='text-center text-gray-600 mt-3 text-xl'>
          Turn your topic into a complete course
        </p>
      </div>

      <div className='grid w-full max-w-xl mt-5 gap-6 bg-white/40 z-10'>
        <InputGroup>
          <InputGroupTextarea
            data-slot='input-group-control'
            className='flex field-sizing-content min-h-24 w-full resize-none rounded-xl bg-transparent px-3 py-2.5 text-base transition-[color,box-shadow] outline-none md:text-sm'
            placeholder='Enter your topic...'
          />
          <InputGroupAddon align='block-end'>
            <Select>
              <SelectTrigger className='w-[180px]'>
                <SelectValue placeholder='full-course' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='full-course'>Full Course</SelectItem>
                <SelectItem value='quick-explain-video'>
                  Quick Explain Video
                </SelectItem>
              </SelectContent>
            </Select>

            <InputGroupButton
              className='ml-auto'
              size='icon-sm'
              variant='default'
            >
              <Send />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>

      <div className='flex gap-5 mt-5 max-w-3xl flex-wrap justify-center z-10'>
        {QUICK_VIDEO_SUGGESTIONS.map((suggestion, index) => (
          <h2
            key={index}
            className='border rounded-xl px-2 p-1 text-sm bg-white/50'
          >
            {suggestion.title}
          </h2>
        ))}
      </div>
    </div>
  );
};

export default Hero;
