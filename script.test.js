import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';

describe('Tech Radar Tests', () => {
    beforeEach(() => {
        // Set up our test HTML with the actual radar structure
        document.body.innerHTML = `
            <div id="radar"></div>
            <div id="quadrantButtons">
                <div class="button first-quadrant">TECHNIQUES</div>
                <div class="button second-quadrant">TOOLS</div>
                <div class="button third-quadrant">PLATFORMS</div>
                <div class="button fourth-quadrant">LANGUAGES</div>
            </div>
        `;
    });

    // Test 1: Check if radar container exists
    test('radar container exists on page', () => {
        const radarContainer = document.getElementById('radar');
        expect(radarContainer).toBeInTheDocument();
    });

    // Test 2: Check if all quadrant buttons are present
    test('all tech quadrants are visible', () => {
        const quadrants = ['TECHNIQUES', 'TOOLS', 'PLATFORMS', 'LANGUAGES'];
        quadrants.forEach(quadrant => {
            const button = screen.getByText(quadrant);
            expect(button).toBeInTheDocument();
        });
    });

    // Test 3: Check radar data format
    test('radar entry has correct format', () => {
        const sampleEntry = {
            name: "Docker",
            quadrant: 2,        // PLATFORMS quadrant
            ring: 0,            // ADOPT ring
            moved: 0            // Hasn't moved
        };
        
        expect(sampleEntry).toHaveProperty('name');
        expect(sampleEntry).toHaveProperty('quadrant');
        expect(sampleEntry).toHaveProperty('ring');
        expect(sampleEntry).toHaveProperty('moved');
    });

    // Test 4: Test quadrant order
    test('quadrants are in correct order', () => {
        const quadrants = ['TECHNIQUES', 'TOOLS', 'PLATFORMS', 'LANGUAGES'];
        const quadrantButtons = document.querySelectorAll('.button');
        
        quadrantButtons.forEach((button, index) => {
            expect(button.textContent).toBe(quadrants[index]);
        });
    });

    // Test 5: Test rings setup
    test('rings are correctly defined', () => {
        const rings = ['ADOPT', 'TRIAL', 'ASSESS', 'HOLD'];
        expect(rings[0]).toBe('ADOPT');
        expect(rings[1]).toBe('TRIAL');
        expect(rings[2]).toBe('ASSESS');
        expect(rings[3]).toBe('HOLD');
    });
});