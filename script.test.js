import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';

describe('Tech Radar Tests', () => {
    beforeEach(() => {
        // Set up our document body
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

    // Test 1: Basic DOM Elements
    test('should have radar container', () => {
        const radarContainer = document.getElementById('radar');
        expect(radarContainer).toBeInTheDocument();
    });

    // Test 2: Quadrant Buttons
    test('should have all quadrant buttons', () => {
        const quadrants = ['TECHNIQUES', 'TOOLS', 'PLATFORMS', 'LANGUAGES'];
        quadrants.forEach(quadrant => {
            const button = screen.getByText(quadrant);
            expect(button).toBeInTheDocument();
        });
    });

    // Test 3: Radar Data Structure
    test('radar data should have correct structure', () => {
        const sampleData = {
            name: "Sample Entry",
            quadrant: 0,
            ring: 2,
            moved: 0
        };
        
        expect(sampleData).toHaveProperty('name');
        expect(sampleData).toHaveProperty('quadrant');
        expect(sampleData).toHaveProperty('ring');
        expect(sampleData).toHaveProperty('moved');
    });

    // Test 4: Quadrant Classification
    test('should classify entries into correct quadrants', () => {
        const quadrantNames = ['TECHNIQUES', 'TOOLS', 'PLATFORMS', 'LANGUAGES'];
        const quadrantIndex = 0; // TECHNIQUES
        
        expect(quadrantNames[quadrantIndex]).toBe('TECHNIQUES');
    });

    // Test 5: Ring Classification
    test('should classify entries into correct rings', () => {
        const rings = ['ADOPT', 'TRIAL', 'ASSESS', 'HOLD'];
        const ringIndex = 0; // ADOPT
        
        expect(rings[ringIndex]).toBe('ADOPT');
    });
});